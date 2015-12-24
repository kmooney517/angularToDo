let Controller = function() {
  


  let vm = this;

  vm.items = [
    {
      title: 'Most Important ToDo',
      done: false
    }
  ];

  vm.addItem = addItem;
  vm.deleteItem = deleteItem;
  vm.clearCompleted = clearCompleted;


  function addItem (item) {
    vm.items.push({'title': item.title, 'done': false});
    item.title = '';
  }

  function deleteItem () {
  }

  function clearCompleted () {
    vm.items = vm.items.filter(function(items) {
      return items.done === false;
    });
  }
};

Controller.$inject = [];

export default Controller;