import list from 'components/ui/list';

export default React => () => {
  const List = list(React);
  const props = {
    listClass: 'teams',
    itemClass: 'team',
    list: [
      {
        id: 1,
        name: 'team 1'
      },
      {
        id: 2,
        name: 'team 2'
      },
      {
        id: 3,
        name: 'team 3'
      }
    ]
  };

  return (
    <List { ...props } />
  );
};
