<template>
    <div>
        <el-dialog :title="title" v-model="dialogVisible" :close-on-click-modal="true" :destroy-on-close="true" :before-close="cancel" width="1050px">
            <el-row :gutter="20">
                <el-col :lg="12" :md="12">
                    <el-descriptions size="small" title="基础信息" :column="2" border>
                        <template #extra>
                            <el-link @click="onRefresh" icon="refresh" :underline="false" type="success"></el-link>
                        </template>
                        <el-descriptions-item label="主机名">
                            {{ stats.hostname }}
                        </el-descriptions-item>
                        <el-descriptions-item label="运行时间">
                            {{ stats.uptime }}
                        </el-descriptions-item>
                        <el-descriptions-item label="总任务">
                            {{ stats.totalProcs }}
                        </el-descriptions-item>
                        <el-descriptions-item label="运行中任务">
                            {{ stats.runningProcs }}
                        </el-descriptions-item>
                        <el-descriptions-item label="负载"> {{ stats.load1 }} {{ stats.load5 }} {{ stats.load10 }} </el-descriptions-item>
                    </el-descriptions>
                </el-col>

                <el-col :lg="6" :md="6">
                    <div class="card-item-chart" ref="memRef"></div>
                </el-col>

                <el-col :lg="6" :md="6">
                    <div class="card-item-chart" ref="cpuRef"></div>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :lg="8" :md="8">
                    <span style="font-size: 16px; font-weight: 700">磁盘</span>
                    <el-table :data="stats.fSInfos" stripe max-height="250" style="width: 100%" border>
                        <el-table-column prop="mountPoint" label="挂载点" min-width="100" show-overflow-tooltip> </el-table-column>
                        <el-table-column prop="used" label="可使用" min-width="70" show-overflow-tooltip>
                            <template #default="scope">
                                {{ formatByteSize(scope.row.free) }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="Used" label="已使用" min-width="70" show-overflow-tooltip>
                            <template #default="scope">
                                {{ formatByteSize(scope.row.used) }}
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>

                <el-col :lg="16" :md="16">
                    <span style="font-size: 16px; font-weight: 700">网卡</span>
                    <el-table :data="netInter" stripe max-height="250" style="width: 100%" border>
                        <el-table-column prop="name" label="网卡" min-width="120" show-overflow-tooltip></el-table-column>
                        <el-table-column prop="ipv4" label="IPv4" min-width="130" show-overflow-tooltip> </el-table-column>
                        <el-table-column prop="ipv6" label="IPv6" min-width="130" show-overflow-tooltip> </el-table-column>
                        <el-table-column prop="rx" label="接收(rx)" min-width="110" show-overflow-tooltip>
                            <template #default="scope">
                                {{ formatByteSize(scope.row.rx) }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="tx" label="发送(tx)" min-width="110" show-overflow-tooltip>
                            <template #default="scope">
                                {{ formatByteSize(scope.row.tx) }}
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { toRefs, reactive, watch, ref, nextTick } from 'vue';
import useEcharts from '@/common/echarts/useEcharts';
import tdTheme from '@/common/echarts/theme.json';
import { formatByteSize } from '@/common/utils/format';
import { machineApi } from './api';

const props = defineProps({
    visible: {
        type: Boolean,
    },
    machineId: {
        type: Number,
    },
    title: {
        type: String,
    },
});

const emit = defineEmits(['update:visible', 'cancel', 'update:machineId']);

const cpuRef: any = ref();
const memRef: any = ref();

let cpuChart: any = null;
let memChart: any = null;

const state = reactive({
    dialogVisible: false,
    stats: {} as any,
    netInter: [] as any,
});

const { dialogVisible, stats, netInter } = toRefs(state);

let charts = [] as any;

watch(props, async (newValue: any) => {
    const visible = newValue.visible;
    if (visible) {
        await setStats();
    }
    state.dialogVisible = visible;
    if (visible) {
        initCharts();
    }
});

const setStats = async () => {
    state.stats = await machineApi.stats.request({ id: props.machineId });
};

const onRefresh = async () => {
    await setStats();
    initCharts();
};

const initMemStats = () => {
    const mem = state.stats.memInfo;
    const data = [
        { name: '可用内存', value: mem.available },
        {
            name: '已用内存',
            value: mem.total - mem.available,
        },
    ];
    const option = {
        title: {
            text: '内存',
            x: 'left',
            textStyle: { fontSize: 15 },
        },
        tooltip: {
            trigger: 'item',
            valueFormatter: formatByteSize,
        },
        legend: {
            top: '15%',
            orient: 'vertical',
            left: 'left',
            textStyle: { fontSize: 12 },
        },
        series: [
            {
                name: '内存',
                type: 'pie',
                radius: ['30%', '60%'], // 饼图内圈和外圈大小
                center: ['60%', '50%'], // 饼图位置，0: 左右；1: 上下
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: data,
            },
        ],
    };
    if (memChart) {
        memChart.setOption(option, true);
        return;
    }
    const chart: any = useEcharts(memRef.value, tdTheme, option);
    memChart = chart;
    charts.push(chart);
};

const initCpuStats = () => {
    const cpu = state.stats.cpu;
    const data = [
        { name: 'Idle', value: cpu.idle },
        {
            name: 'Iowait',
            value: cpu.iowait,
        },
        {
            name: 'System',
            value: cpu.system,
        },
        {
            name: 'User',
            value: cpu.user,
        },
    ];
    const option = {
        title: {
            text: 'CPU使用率',
            x: 'left',
            textStyle: { fontSize: 15 },
        },
        tooltip: {
            trigger: 'item',
            valueFormatter: (value: any) => value + '%',
        },
        legend: {
            top: '15%',
            orient: 'vertical',
            left: 'left',
            textStyle: { fontSize: 12 },
        },
        series: [
            {
                name: 'CPU',
                type: 'pie',
                radius: ['30%', '60%'], // 饼图内圈和外圈大小
                center: ['60%', '50%'], // 饼图位置，0: 左右；1: 上下
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: data,
            },
        ],
    };
    if (cpuChart) {
        cpuChart.setOption(option, true);
        return;
    }
    const chart: any = useEcharts(cpuRef.value, tdTheme, option);
    cpuChart = chart;
    charts.push(chart);
};

const initCharts = () => {
    nextTick(() => {
        initMemStats();
        initCpuStats();
    });
    parseNetInter();
    initEchartsResize();
};

const initEchartResizeFun = () => {
    nextTick(() => {
        for (let i = 0; i < charts.length; i++) {
            setTimeout(() => {
                charts[i].resize();
            }, i * 1000);
        }
    });
};

const initEchartsResize = () => {
    window.addEventListener('resize', initEchartResizeFun);
};

const parseNetInter = () => {
    state.netInter = [];
    const netInter = state.stats.netIntf;
    const keys = Object.keys(netInter);
    const values = Object.values(netInter);
    for (let i = 0; i < values.length; i++) {
        let value: any = values[i];
        // 将网卡名称赋值新属性值name
        value.name = keys[i];
        state.netInter.push(value);
    }
};

const cancel = () => {
    emit('update:visible', false);
    emit('cancel');

    setTimeout(() => {
        cpuChart = null;
        memChart = null;
    }, 200);
};
</script>
<style lang="scss">
.card-item-chart {
    height: 200px;
    width: 100%;
}
</style>
