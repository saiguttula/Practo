import Form from "../Form/Form";
import DoctorCard from "../DoctorCard/DoctorCard";
import "./Doctorslist.css";

const DoctorsDetailsList = [
  {
    name: "Dr. Monica Varma",
    role: "Dermotologist",
    fee: 700,
    experience: 18,
    city: "Kondapur, Hyderabad",
    hospital_name: "shirisha Skin and Hair clinic +1 more",
    likes: 93,
    patients: 304,
  },
  {
    name: "Dr. Monica Varma",
    role: "Dermotologist",
    fee: 700,
    experience: 18,
    city: "Kondapur, Hyderabad",
    hospital_name: "shirisha Skin and Hair clinic +1 more",
    likes: 93,
    patients: 304,
  },
  {
    name: "Dr. Monica Varma",
    role: "Dermotologist",
    fee: 700,
    experience: 18,
    city: "Kondapur, Hyderabad",
    hospital_name: "shirisha Skin and Hair clinic +1 more",
    likes: 93,
    patients: 304,
  },
  {
    name: "Dr. Monica Varma",
    role: "Dermotologist",
    fee: 700,
    experience: 18,
    city: "Kondapur, Hyderabad",
    hospital_name: "shirisha Skin and Hair clinic +1 more",
    likes: 93,
    patients: 304,
  },
  {
    name: "Dr. Monica Varma",
    role: "Dermotologist",
    fee: 700,
    experience: 18,
    city: "Kondapur, Hyderabad",
    hospital_name: "shirisha Skin and Hair clinic +1 more",
    likes: 93,
    patients: 304,
  },
  {
    name: "Dr. Monica Varma",
    role: "Dermotologist",
    fee: 700,
    experience: 18,
    city: "Kondapur, Hyderabad",
    hospital_name: "shirisha Skin and Hair clinic +1 more",
    likes: 93,
    patients: 304,
  },
];

const Doctorslist = function () {
  return (
    <div className="doctorslist-container">
      <div className="form-container">
        <Form />
      </div>
      <div className="navbar-doctorslist"></div>
      <div className="doctorslist">
        <div className="doctor-cards-list">
          <h1 className="doctors-card-title">
            23 doctors available in this City
          </h1>
          <p className="doctors-card-paragraph">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#293887"
              class="bi bi-patch-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
            <span className="text-icon">Book appointments with minimum wait-time & verified doctor details</span>
          </p>
          <div>
            {DoctorsDetailsList.map((item) => (
              <DoctorCard DoctorsDetails={item} />
            ))}
          </div>
        </div>
        <div className="clinics-list">
          <h5 className="clinics-list-first">Practo Blue Book</h5>
          <h5 className="clinics-list-second">Safety of your data</h5>
          <div className="clinics-list-list">
            <h5 className="heading">Related treatments in hyderabad</h5>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h5 className="heading">Related treatments in hyderabad</h5>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h5 className="heading">Health Articles</h5>
            <p className="paragraph">Acne</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctorslist;
