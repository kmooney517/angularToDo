let Controller = function() {
  


  let vm = this;

  vm.items = [
    {
      title: 'Most Important ToDo',
      done: false
    }
  ];
  console.log(vm.items);

  vm.addItem = addItem;
  vm.clearCompleted = clearCompleted;


  function addItem (item) {
    vm.items.push({'title': item.title, 'done': item.done = false});
    item.title = '';
  }

  function clearCompleted () {
    vm.items = vm.items.filter(function(items) {
      return items.done === false;
    });
  }
};

Controller.$inject = [];

export default Controller;