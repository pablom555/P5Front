import React, {useState} from 'react';
import CustomDialog from './CustomDialog';
import TableHeader from './Table/TableHeader';
import TableItem from './Table/TableItem';

const TablePassenger = ({titles, items}) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [detail, setDetail] = useState([]);

  const handleClickPassenger = passengerId => {
    const passenger = items.find(item => item._id === passengerId);
    setDetail(passenger.packages);
    setIsOpenDetail(true);
  };

  return (
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <TableHeader titles={titles} />
        <tbody>
          {items.length &&
            items.map(item => (
              <TableItem
                key={item._id}
                fields={item}
                titles={titles}
                handleClick={passengerId => handleClickPassenger(passengerId)}
              />
            ))}
        </tbody>
      </table>
      {isOpenDetail && (
        <CustomDialog open={isOpenDetail} setOpen={setIsOpenDetail} detail={detail} />
      )}
    </div>
  );
};

export default TablePassenger;
