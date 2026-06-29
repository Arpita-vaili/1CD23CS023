const weight = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getPriorityNotifications(notifications) {
  return [...notifications]
    .sort((a, b) => {
      if (weight[b.type] !== weight[a.type]) {
        return weight[b.type] - weight[a.type];
      }
      return new Date(b.time) - new Date(a.time);
    })
    .slice(0, 10);
}