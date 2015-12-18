// import { Row, Card } from 'elemental';
//
// export default React => ({ listClass, itemClass, list }) => {
//   const children = list.map(item => {
//     return (
//       <Row className={ itemClass } id={ item.id } key={ item.id }>
//         <Card>{ item.name }</Card>
//       </Row>
//     );
//   });
//
//   return <ul className={ listClass }>{ children }</ul>;
// };

export default React => ({ listClass, itemClass, list }) => {
  const children = list.map(item => {
    return (
      <li className={ itemClass } id={ item.id } key={ item.id }>
        <p>{ item.name }</p>
      </li>
    );
  });

  return <ul className={ listClass }>{ children }</ul>;
};
