import "./DoctorCard.css";

const DoctorCard = function (props) {
  const { DoctorsDetails } = props;
  console.log(DoctorsDetails);

  return (
    <div className="card">
      <img
        className="doctor-img"
        src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        alt="doctor"
      />
      <div className="card-right-container">
        <div className="doctor-details-container">
          <div className="first-doctor-details-container">
            <h2>{DoctorsDetails.name}</h2>
            <div className="row">
              <p className="same-size-para">{DoctorsDetails.role}</p>
              <p className="same-size-para fee">
                <span className="rupees-bold">{DoctorsDetails.fee}</span>{" "}
                Consultation fee at clinic
              </p>
            </div>
            <p className="same-size-para">{DoctorsDetails.experience} years experience overall</p>
            <div className="row">
              <h5>{DoctorsDetails.city}</h5>
              <p className="clinic-name">{DoctorsDetails.hospital_name}</p>
            </div>
          </div>
          <div className="likes-patients-container">
            <p className="likes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffffff"
                class="bi bi-hand-thumbs-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>
              <span className="likes-span">{DoctorsDetails.likes}%</span>
            </p>
            <p className="patients">{DoctorsDetails.patients} Patient Stories</p>
          </div>
        </div>
        <div className="date-appointment-container">
          <p className="availabletoday">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#293887"
              class="bi bi-calendar-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
            <span className="available-today-matter">Available Today</span>
          </p>
          <button className="videoconsult-btn">VideoConsult</button>
          <button className="bookappointment-btn">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
