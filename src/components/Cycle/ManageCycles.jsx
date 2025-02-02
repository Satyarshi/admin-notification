import React, { useState } from "react";
import notifyIcon from "../../assets/notify.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/trash-empty.svg";
import DeleteModal from "../DeleteModal";
import image from "../../assets/sort.svg";
import CycleDetail from "./CycleDetail";

const ManageCycles = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState(null);
  const [cycles, setCycles] = useState([
    {
      cycleCode: "VFGA24-A1",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      panchayatReportDate: "01-01-2025",
      officialReportDate: "02-02-2025",
      title: "Some text",
      description: "Some text description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi unde voluptatibus, eligendi soluta eos eaque magnam, reiciendis magni nihil quam, odit quidem suscipit pariatur officiis! Commodi, quae accusantium! Voluptatem, modi nobis alias mollitia cum accusamus. Quas illo ut illum dolore aspernatur accusamus tenetur adipisci iusto? Dolore animi a natus, repellendus eligendi eius rem expedita? Eos facere odit eaque totam iure repellat eius dolor inventore blanditiis laudantium, hic ad optio ex, exercitationem vitae minus! Eaque est quaerat quo vero a illum distinctio et vel placeat repudiandae laborum explicabo tempora ad corporis in, exercitationem fugit voluptatem rem nihil, ducimus, architecto ratione magni? Ut, rem veniam? Vero eveniet, modi laboriosam iste, dolor consequatur delectus ipsam alias, dolore tempora eos blanditiis numquam at atque. Possimus maiores, ullam modi quasi eius quaerat quas nesciunt voluptatibus veniam asperiores nostrum quos architecto autem ducimus fugiat similique! Placeat ipsam non consequatur, dolore id laborum hic! Inventore est suscipit quis, vel velit modi tempora voluptate saepe dolorum repudiandae, dicta perferendis id a? Non ex, alias commodi perferendis, quo ipsum quis facilis harum animi consequuntur eius fugit magnam sit quidem incidunt! In animi amet nobis reiciendis libero sint natus alias nam! Ad iure libero error autem excepturi fugiat veritatis?",
    },
    {
      cycleCode: "VFGA24-A2",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      panchayatReportDate: "01-01-2025",
      officialReportDate: "02-02-2025",
      title: "Some text",
      description: "Some text description",
    },
    {
      cycleCode: "VFGA24-A3",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      panchayatReportDate: "01-01-2025",
      officialReportDate: "02-02-2025",
      title: "Some text",
      description: "Some text description",
    },
    {
      cycleCode: "VFGA24-A4",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      panchayatReportDate: "01-01-2025",
      officialReportDate: "02-02-2025",
      title: "Some text",
      description: "Some text description",
    },
    {
      cycleCode: "VFGA24-A5",
      appStartDate: "01-01-2025",
      appEndDate: "01-01-2025",
      panchayatReportDate: "01-01-2025",
      officialReportDate: "02-02-2025",
      title: "Some text",
      description: "Some text description",
    },
  ]);

  const [selectedCycles, setSelectedCycles] = useState([]); // Holds selected cycles

  // Handler to toggle "Select All"
  const handleSelectAll = () => {
    if (selectedCycles.length === cycles.length) {
      setSelectedCycles([]); // Unselect all
    } else {
      setSelectedCycles([...cycles]); // Select all cycles
    }
  };

  // Handler to toggle individual selection
  const handleSelectCycle = (cycle) => {
    setSelectedCycles((prevSelected) =>
      prevSelected.some((selected) => selected.cycleCode === cycle.cycleCode)
        ? prevSelected.filter(
            (selected) => selected.cycleCode !== cycle.cycleCode
          )
        : [...prevSelected, cycle]
    );
  };

  // Open delete modal for selected cycles
  const openDeleteModal = () => {
    if (selectedCycles.length > 0) {
      setShowModal(true);
    }
  };

  // Handler to delete selected cycles after confirmation
  const handleDelete = () => {
    setCycles(cycles.filter((cycle) => !selectedCycles.includes(cycle)));
    setSelectedCycles([]); // Clear selection after deletion
    setShowModal(false);
  };

  return (
    <>
      <div>
        <div className="w-full md:w-[82vw] lg:w-[62vw] xl:w-[52vw] bg-white rounded-xl border-2 border-[#EDEDED]">
          <p className="text-2xl font-semibold m-4 pl-4">
            Manage Notifications
          </p>
          <hr />

          <div className="flex items-center gap-4 mb-6 px-4 mt-5">
            <div className="bg-[#EDEDED] rounded-full p-2">
              <img src={notifyIcon} alt="Notification" className="h-6 w-6" />
            </div>
            <span className="font-semibold text-3xl text-[#191632]">
              {cycles.length}
            </span>
            <span className="text-gray-500 text-xl">Cycles</span>
          </div>

          <div className="overflow-x-auto p-4 mb-10">
            <table className="min-w-full table-auto">
              <thead className="bg-[#F8F8F8] text-left text-[#89888E]">
                <tr>
                  <th className="p-4">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-red-500"
                      checked={selectedCycles.length === cycles.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="p-4 text-sm">
                    <div className="flex">
                      CYCLE CODE <img src={image} alt="" />
                    </div>
                  </th>
                  <th className="p-4 text-sm">
                    <div className="flex">
                      APP START DATE <img src={image} alt="" />
                    </div>
                  </th>
                  <th className="p-4 text-sm">
                    <div className="flex">
                      APP END DATE <img src={image} alt="" />
                    </div>
                  </th>
                  <th className="p-4 text-sm">
                    <div className="flex">
                      ADD. INFO <img src={image} alt="" />
                    </div>
                  </th>
                  <th className="p-4 text-sm"></th>
                </tr>
              </thead>
              <tbody>
                {cycles.map((cycle, index) => (
                  <tr key={index} className="border-b-2 border-gray-200">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-red-500"
                        checked={selectedCycles.some(
                          (selected) => selected.cycleCode === cycle.cycleCode
                        )}
                        onChange={() => handleSelectCycle(cycle)}
                      />
                    </td>
                    <td className="p-4">{cycle.cycleCode}</td>
                    <td className="p-4 text-[#AAAAAA]">{cycle.appStartDate}</td>
                    <td className="p-4 text-[#AAAAAA]">{cycle.appEndDate}</td>
                    <td className="p-4 text-[#AAAAAA]">{cycle.title}</td>
                    <td className="p-4 flex items-center gap-4">
                      <button
                        className="text-green-500"
                        onClick={() => setSelectedCycle(cycle)}
                      >
                        <img src={editIcon} alt="Edit" className="h-6 w-6" />
                      </button>
                      {/* <button className="text-red-500" onClick={openDeleteModal}>
                        <img src={deleteIcon} alt="Delete" className="h-6 w-6" />
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Delete Selected Button */}
          {selectedCycles.length > 0 && (
            <div className="p-4">
              <button
                onClick={openDeleteModal}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete Selected Cycles
              </button>
            </div>
          )}
        </div>
      </div>

      <CycleDetail cycle={selectedCycle} onClose={() => setSelectedCycle(null)} />

      {/* DeleteCycle Modal */}
      <DeleteModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        title={"Delete Cycles"}
        description={"Are you sure you want to delete the selected cycles ?"}
      />
    </>
  );
};

export default ManageCycles;

