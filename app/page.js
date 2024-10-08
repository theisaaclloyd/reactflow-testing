"use client";
import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useReactFlow,
  SelectionMode
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { v1 as getId } from 'uuid';

import FrameNode from './FrameNode';
import ComponentPanel from './ComponentPanel';
import TentIcon from './Icons/TentIcon';

//const getId = () => `${uuidv1()}`;

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

  // drop event handler
  const onDrop = useCallback((e) => {
    e.preventDefault();

    const type = e.dataTransfer.getData('application/reactflow');

    if (typeof type === 'undefined' || !type) {
      return;
    }

    const position = screenToFlowPosition({
      x: e.clientX,
      y: e.clientY,
    });

    const newNode = {
      id: `${getId()}`,
      type,
      position,
      zIndex: (type === 'frame_1') ? 1 : 10, // I dont think this works; find a way to force frame to back
      data: {
        label: `${type}`,
        createdAt: new Date().toLocaleString(),
      },
    };

    setNodes((nodes) => nodes.concat(newNode));
  }, [screenToFlowPosition, setNodes]);

  return (
    <div className='bg-white w-full h-full'>
      <ReactFlow
        // node elements
        nodes={nodes}
        onNodesChange={onNodesChange}

        // drag and drop stuff
        onDrop={onDrop}
        onDragOver={onDragOver}

        // specify custom node types
        nodeTypes={nodeTypes}

        // grid settings
        //snapToGrid
        //snapGrid={[20, 20]}

        // viewport controls
        panOnScroll={true}
        selectionOnDrag={true}
        panOnDrag={false}
        selectionMode={SelectionMode.Partial}
        fitView={true}

        attributionPosition='hidden'
      >
        <Controls position='bottom-right' />
        <MiniMap position='bottom-left' pannable zoomable />
        <Background variant="cross" gap={20} size={5} />
        <ComponentPanel />
      </ReactFlow>
    </div>
  );
}