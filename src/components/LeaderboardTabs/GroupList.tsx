import React, { useState } from 'react';
import GroupBoard from './GroupBoard';
import Groups from './Groups';

const GroupList = () => {
  const [groupName, setGroupName] = useState(undefined);
  const [itemId, setItemId] = useState(undefined);

  const handleGroupChange = (name, id) => {
    setGroupName(name);
    setItemId(id);
  };

  return (
    <>
      <Groups handleGroupChange={handleGroupChange} />
      {groupName && <GroupBoard groupName={groupName} itemId={itemId} />}
    </>
  );
};

export default GroupList;
