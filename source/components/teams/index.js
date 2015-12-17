export default React => ({ teamListClass, teamClass, teamList }) => {
  const children = teamList.map(team => {
    return (
      <li className={ teamClass } key={ team.id }>
        <p>{ team.name }</p>
      </li>
    );
  });

  return <ul className={ teamListClass }>{ children }</ul>;
};
