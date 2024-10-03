"use client";

import { useState } from 'react';
import { Panel } from '@xyflow/react';
import "@xyflow/react/dist/style.css";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";



export default function ComponentPanel() {
	const [floating, setFloating] = useState(false);

	const onDragStart = (event, nodeType) => {
		event.dataTransfer.setData('application/reactflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<Panel position="top-left" className={`bg-white text-black p-5 border-2 flex flex-col w-60`}>

			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="frames">
					<AccordionTrigger>Frames</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-1'>
						<div className="height-10 p-2 border-2 cursor-grab flex items-center justify-center flex-col input" onDragStart={(event) => onDragStart(event, 'frame_1')} draggable>
							Frame 1
						</div>
						<div className="height-10 p-2 border-2 cursor-grab flex items-center justify-center flex-col" onDragStart={(event) => onDragStart(event, 'frame_2')} draggable>
							Frame 2
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="items">
					<AccordionTrigger>Items</AccordionTrigger>
					<AccordionContent className='flex flex-col gap-1'>
						<div className="height-10 p-2 border-2 cursor-grab flex items-center justify-center flex-col input" onDragStart={(event) => onDragStart(event, 'tent_med')} draggable>
							Tent - medium
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Panel>
	);
};