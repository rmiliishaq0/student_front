"use client"

import * as React from "react"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import ScoreChart from "./ScoreChart"



export default function ScoreDrawer({rawScore = 0, open,setOpen}: {rawScore?: number,open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>}) {

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="p-5 flex-1" variant="outline">
          Your Performance
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Your Performance</DrawerTitle>
            <DrawerDescription>
              This is your calculated productivity score.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-0">
            <ScoreChart rawScore ={rawScore}/>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}