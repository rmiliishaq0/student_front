"use client"
import DotGrid from '../DotGrid';

export default function Backgound(){
    return (
        <div className="absolute inset-0 -z-10 bg-black">  
            <DotGrid
                dotSize={5}
                gap={15}
                baseColor="#271E37"
                activeColor="#5227FF"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
                style={{}}
            />
</div>
    )
}