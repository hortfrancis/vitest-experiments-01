
const MySimpleTable = ({ data }: { data: Array<{ id: number; name: string }> }) => {

  function toSentenceCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const headerText = data.length > 0 ? Object.keys(data[0]).map((key) => toSentenceCase(key)) : [];
  console.log('headerText:', headerText);

  return (
    <table>
      <thead>
        <tr>
          {headerText.map((text) => (<th key={text}>{text}</th>))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MySimpleTable;
