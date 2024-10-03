"use client";
import { useCallback, useState, useEffect, useRef } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  useReactFlow
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { v1 as uuidv1 } from 'uuid';

import FrameNode from './FrameNode';
import ComponentPanel from './ComponentPanel';
import TentIcon from './Icons/TentIcon';

const getId = () => `${uuidv1()}`;

const nodeTypes = {
  frame_1: FrameNode,
  frame_2: FrameNode,
  tent_med: TentIcon,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const { screenToFlowPosition } = useReactFlow();


  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((event) => {
    event.preventDefault();

    const type = event.dataTransfer.getData('application/reactflow');

    if (typeof type === 'undefined' || !type) {
      return;
    }

    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    const newNode = {
      id: `${getId()}`,
      type,
      position,
      zIndex: (type === 'frame_1') ? 1 : 10,
      data: {
        label: `${type}`,
        createdAt: new Date().toLocaleString(),
      },
    };

    setNodes((nds) => nds.concat(newNode));
  }, [screenToFlowPosition, setNodes]);

  return (
    <div className='bg-white w-full h-full'>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}

        onDrop={onDrop}
        onDragOver={onDragOver}


        nodeTypes={nodeTypes}

        snapToGrid
        snapGrid={[20, 20]}

        attributionPosition='hidden'

        fitView
      >
        <Controls position='bottom-right' />
        <MiniMap position='bottom-left' pannable zoomable />
        <Background variant="cross" gap={20} size={5} />
        <ComponentPanel />
      </ReactFlow>
    </div>
  );
}