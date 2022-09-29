const { Group } = require('../../models/group');

const updateById = async (groupId, props) => {
  const group = await Group.findById(groupId);

  for (const property in props) {
    group[property] = props[property];
  }

  await group.save();

  return group;
};

const joinGroup = async (groupId, userId) => {
  const group = await Group.findById(groupId);

  group.members.push(userId);

  await group.save();

  return group;
}

const leaveGroup = async (groupId, userId) => {
  const group = await Group.findById(groupId);

  const index = group.members.indexOf(userId);
  if (index > -1) {
    group.members.splice(index, 1);
  }

  await group.save();

  return group;
}
  
module.exports = { updateById, joinGroup, leaveGroup };