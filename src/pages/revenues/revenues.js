import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from 'axios';
// import PageHeader from "../../components/Common/PageHeader";
// import DataTable from "react-data-table-component";
// import RevenuesData from "../../components/data/RevenuesData";

function Revenues() {
  const [isModal, setIsModal] = useState(false);
  const [isEditModalData, setIsEditModalData] = useState("");
  const [columnsT, setColumnsT] = useState(undefined);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isDeleteSuccessModal, setIsDeleteSuccessModal] = useState(false);
  const [siEditModal, setSiEditModal] = useState("");
  const [isModalheader, setModalheader] = useState("");

  const initialRevenuesState = {
    revId:'',
    item:'',
    amount:'',
    from:'',
    date:'',
    status:'',
    createBy:'',

  }
  const [revenues, setRevenues] = useState(initialRevenuesState);
  const [submitted, setSubmitted] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  const handleInputChange = e =>{
    const { name, value} = e.target;
    setRevenues({...revenues, [name]: value, createBy:''  })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const {item, amount, from, date, status} = revenues;
        if (item.trim() !== '' && amount.trim() !== '' && from.trim() !== '' 
        && date.trim() !== '' && status.trim() !== ''){
            const dataRevenues= new DataRevenues();
            dataRevenues.append('item', item);
            dataRevenues.append('amount', amount);
            dataRevenues.append('from', from);
            dataRevenues.append('date', date);
            dataRevenues.append('status', status);
            setSubmitted(true)
            await axios.post('http:localhost:8080/revenues', data, {
                header:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            } else {
                setErrMsg('Please enter all the field values')
            }
            // dispatch({})
    } catch (error) {
        error.response && setErrMsg(error.response.data)
    }

  }


  useEffect(() => {
    setColumnsT([
      {
        name: "REV ID",
        selector: (row) => row.revId,
        sortable: true,
      },
      {
        name: "ITEM",
        selector: (row) => row.item,
        sortable: true,
      },
      {
        name: "DATE",
        selector: (row) => row.date,
        sortable: true,
      },
      {
        name: "FROM",
        selector: (row) => row.from,
        sortable: true,
      },
      {
        name: "AMOUNT",
        selector: (row) => row.amount,
        sortable: true,
      },
      {
        name: "STATUS",
        selector: () => {},
        sortable: true,
        cell: (row) => (
          <span
            className={`badge ${
              row.status === "Completed"
                ? "bg-success"
                : row.status === "Draft"
                ? "bg-lavender-purple"
                : row.status === "Decline"
                ? "bg-red"
                : "bg-warning"
            }`}
          >
            {row.status}
          </span>
        ),
      },
      {
        name: "ACTION",
        selector: () => {},
        sortable: true,
        cell: (row) => (
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => {
                setIsEditModalData(row);
                setIsModal(true);
              }}
            >
              <i className="icofont-edit text-success"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary deleterow"
              onClick={() => {
                setIsDeleteModal(true);
                setSiEditModal(row);
              }}
            >
              <i className="icofont-ui-delete text-danger"></i>
            </button>
          </div>
        ),
      },
    ]);
  }, []);

  return (
    <div className="container-xxl">
      <div
        headerTitle="Revenues"
        renderRight={() => {
          return (
            <div className="col-auto d-flex w-sm-100">
              <button
                className="btn btn-dark btn-set-task w-sm-100"
                onClick={() => {
                  setIsModal(true);
                  setModalheader("Add Revenues");
                }}
              >
                <i className="icofont-plus-circle me-2 fs-6"></i>Add Revenues
              </button>
            </div>
          );
        }}
      />
      <div className="row clearfix g-3">
        <div className="col-sm-12">
          <div
            // title={RevenuesData.title}
            columns={columnsT}
            // data={RevenuesData.rows}
            defaultSortField="title"
            pagination
            selectableRows={false}
            className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
            highlightOnHover={true}
          />
        </div>
      </div>
      <Modal
        centered
        show={isModal}
        onHide={() => {
          setIsModal(false);
          setIsEditModalData("");
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">
            {isEditModalData ? "Edit" : "Add"} Revenues
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="item" className="form-label">
              Item
            </label>
            <input
              type="text"
              className="form-control"
              id="item"
              onClick={() => {}}
              defaultValue={isEditModalData ? isEditModalData.item : ""}
            />
          </div>
          <div className="deadline-form">
            <form>
              <div className="row g-3 mb-3">
                <div className="col-sm-6">
                  <label htmlFor="amount" className="form-label">
                    Amount
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="amount"
                    onClick={() => {}}
                    defaultValue={isEditModalData ? isEditModalData.amount : ""}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="abc" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="abc"
                    onClick={() => {}}
                    defaultValue={isEditModalData ? isEditModalData.date : ""}
                  />
                </div>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-sm-6">
                  <label htmlFor="deptwo" className="form-label">
                    From
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="deptwo"
                    onClick={() => {}}
                    defaultValue={isEditModalData ? isEditModalData.from : ""}
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option>Draft</option>
                    <option value="1">In Progress</option>
                    <option value="2">Completed</option>
                    <option value="3">Decline</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setIsModal(false);
            }}
          >
            Done
          </button>
          <button type="button" className="btn btn-primary">
            Save
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={isDeleteModal}
        centered
        onHide={() => {
          setIsDeleteModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Delete Revenues</Modal.Title>
        </Modal.Header>
        <Modal.Body className="justify-content-center flex-column d-flex">
          <i className="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
          <p className="mt-4 fs-5 text-center">
            You can only delete this item Permanently
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setIsDeleteModal(false);
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger color-fff"
            onClick={() => {
              setIsDeleteModal(false);
              setIsDeleteSuccessModal(true);
            }}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        centered
        show={isDeleteSuccessModal}
        onHide={() => {
          setIsDeleteSuccessModal(false);
        }}
      >
        <Modal.Header closeButton>
          <h5 className="modal-title  fw-bold" id="dremovetaskLabel">
            {" "}
            Revenues Delete
          </h5>
        </Modal.Header>
        <Modal.Body className="justify-content-center flex-column d-flex">
          <i className="icofont-delete-alt text-danger display-2 text-center mt-2"></i>
          <p className="mt-4 fs-5 text-center">Revenues Delete Successfully</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Revenues;