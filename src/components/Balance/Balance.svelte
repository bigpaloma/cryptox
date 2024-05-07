<script>
    import * as echarts from "echarts/core";
    import {
        TitleComponent,
        ToolboxComponent,
        TooltipComponent,
        GridComponent,
        DataZoomComponent,
        LegendComponent,
    } from "echarts/components";
    import { LineChart } from "echarts/charts";
    import { UniversalTransition } from "echarts/features";
    import { CanvasRenderer } from "echarts/renderers";
    import { onMount } from "svelte";
    import { time } from "echarts/core";
    import { page } from "$app/stores";

    echarts.use([
        TitleComponent,
        ToolboxComponent,
        TooltipComponent,
        GridComponent,
        DataZoomComponent,
        LineChart,
        CanvasRenderer,
        UniversalTransition,
        LegendComponent,
    ]);

    export let priceArr;
    export let coinInfo;
    const coinId = $page.params.coinId;

    let chartDom;
    onMount(() => {
        const myChart = echarts.init(chartDom, "dark");
        option && myChart.setOption(option);
    });
    const option = {
        tooltip: {
            trigger: "axis",
            position: function (pt) {
                return [pt[0], "5%"];
            },
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#6a7985",
                },
            },
        },
        grid: {
            left: "1%",
            right: "1%",
            bottom: "9%",
            containLabel: true,
        },
        title: {
            left: "left",
            text: `${coinId.toUpperCase()}/CHF`,
        },
        legend: {
            data: ["Preis", "Marktkapitalisierung", "Volumen"],
            type: "plain",
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: "none",
                },
                restore: {},
                saveAsImage: {},
            },
        },
        xAxis: {
            type: "time",
            inverse: false,
            boundaryGap: false,
        },
        yAxis: {
            type: "value",
            position: "right",
            min: function (value) {
                return Math.round(value.min - 1000);
            },
        },
        dataZoom: [
            {
                type: "inside",
                start: 100,
                end: 80,
            },
            {
                start: 100,
                end: 80,
            },
        ],
        series: [
            {
                name: "Preis",
                type: "line",
                //smooth: true,
                showSymbol: false,
                symbolSize: 12,
                emphasis: {
                    focus: "series",
                },
                data: priceArr.prices,
            },
            {
                name: "Marktkapitalisierung",
                type: "line",
                //smooth: true,
                showSymbol: false,
                symbolSize: 12,
                areaStyle: {},
                emphasis: {
                    focus: "series",
                },
                data: priceArr.market_caps,
            },
            {
                name: "Volumen",
                type: "line",
                //smooth: true,
                showSymbol: false,
                symbolSize: 12,
                areaStyle: {},
                data: priceArr.total_volumes,
            },
        ],
    };
</script>

<div class="w-full flex justify-around">
    <div class="flex flex-col gap-4">
        <img class="w-5" src={coinInfo.image.thumb} alt="" />
        <h2>CHF {coinInfo.market_data.current_price["chf"]}</h2>
        <a href={coinInfo.links.homepage[0]}>{coinInfo.links.homepage[0]}</a>
    </div>
    <div class="w-[1000px] h-[600px]" bind:this={chartDom}></div>
</div>
