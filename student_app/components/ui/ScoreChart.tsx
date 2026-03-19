import {
  RadialBarChart,
  RadialBar,
  PolarGrid,
  PolarRadiusAxis,
  Label,
} from "recharts"

import { ChartContainer } from "@/components/ui/chart"

export default function ScoreChart({rawScore = 0, }: {rawScore?: number}){
    const getScoreColor = (score: number) => {
        if (score >= 80) return "#22c55e" 
        if (score >= 50) return "#f59e0b" 
        return "#ef4444" 
    }
    const score = Math.max(0, Math.min(rawScore, 100))
    const color = getScoreColor(score)

    const chartData = [
        {
        name: "score",
        Score: score,
        fill: color,
        },
    ]

    const chartConfig = {
        score: {
        label: "Score",
        },
    }
  return (
  <>
    <ChartContainer
              config={chartConfig}
              className="  max-h-62.5 "
              style={{width:"100%" ,height:"100%"}}
            >
              <RadialBarChart
                data={chartData}
                startAngle={0}
                endAngle={360}
                innerRadius={80}
                outerRadius={110}
              >
                <PolarGrid
                  gridType="circle"
                  radialLines={false}
                  stroke="none"
                  className="first:fill-muted last:fill-background"
                  polarRadius={[86, 74]}
                />

                <RadialBar
                  dataKey="Score"
                  background
                  cornerRadius={10}
                  fill={color}
                  isAnimationActive
                  animationDuration={800}
                />

                <PolarRadiusAxis
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx }
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="central"
                          >
                            {/* Score */}
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="text-4xl font-bold"
                              fill={color}
                            >
                              {score}%
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
  </>
  )
}