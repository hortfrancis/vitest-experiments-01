const TabbableElements = () => {
  // 'Tabbable' = Elements that can receive keyboard focus (by pressing the TAB key).
  return (
    <div className='TabbableElements'>
      <button>Button 1</button>
      <a href="#link1">Link 1</a>
      <input type="text" placeholder="Input 1" />
      <button>Button 2</button>
      <a href="#link2">Link 2</a>
      <input type="text" placeholder="Input 2" />
    </div>
  );
};

export default TabbableElements;
