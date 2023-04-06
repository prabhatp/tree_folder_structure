import React, { useState } from 'react';
import { explorer } from './data/folderData';
import Folder from './components/Folder';
import './index.css';
import useTraverseTree from './hooks/useTraverseTree';

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div>
      <Folder explorer={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
}
