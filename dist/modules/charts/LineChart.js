import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { scaleLinear, scaleBand } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { curveMonotoneX } from "@visx/curve";
const LineChart = ({ data, width, height }) => {
    if (!data || data.length === 0 || width <= 40 || height <= 40) {
        return _jsx("div", { style: { textAlign: "center", padding: "20px" }, children: "No data available" });
    }
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;
    const xScale = scaleBand({
        range: [0, xMax],
        domain: data.map((d) => d.label),
        padding: 0.4,
    });
    const yScale = scaleLinear({
        range: [yMax, 0],
        domain: [0, Math.max(10, ...data.map((d) => d.value))],
    });
    return (_jsx("svg", { width: width, height: height, style: { background: "var(--colorNeutralBackground1)", borderRadius: "8px" }, children: _jsxs(Group, { left: margin.left, top: margin.top, children: [_jsx(LinePath, { data: data, x: (d) => (xScale(d.label) || 0) + xScale.bandwidth() / 2, y: (d) => yScale(d.value) || 0, stroke: "#4F52B2", strokeWidth: 2, curve: curveMonotoneX }), _jsx(AxisBottom, { top: yMax, scale: xScale, stroke: "#ccc" }), _jsx(AxisLeft, { scale: yScale, stroke: "#ccc" })] }) }));
};
export default LineChart;
