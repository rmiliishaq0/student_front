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



export default function ScoreDrawer({rawScore = 0, open,setOpen,title,pargraph,close}: {rawScore?: number,open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>,title:String,pargraph:String,close:String}) {

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="p-5 flex-1" variant="outline">
         {title}
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>
              {pargraph}
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-0">
            <ScoreChart rawScore ={rawScore}/>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{close}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}