import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "./DatesTable.css";

const DatesTable = ({ dates }) => {

  const content =
    dates === "" ? (
      <Tr className="lds-ripple">
        <Td></Td>
        <Td></Td>
      </Tr>
    ) : (
      <Tr>
        <Td>No Dates</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
    );


  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Location</Th>
            <Th>Venue</Th>
            <Th>Information</Th>
          </Tr>
        </Thead>
        {
          !dates.length ?
          <Tbody>
            {content}
        </Tbody>
          :
        <Tbody>
          {dates.map((date, i) => {
            return (
              <Tr key={i}>
              <Td key={i}>{date.date.replace(/-/g, '/')}</Td>
              <Td key={i}>{date.location}</Td>
              <Td key={i}>{date.venue}</Td>
              <Td key={i}><a target="_blank" href={date.info} rel="noopener noreferrer"><button>More info</button></a></Td>
            </Tr>
            )
          })}
        </Tbody>
        }
      </Table>
    </div>
  );
};

export default DatesTable;
