import Navbar from "../components/nav/Navbar";
// import Person from "../components/persons/Persons";
import UpdateCarForm from "../components/form/UpdateCarForm";
// import AddPersonForm from "../components/form/AddPersonForm";
// import Car from "../components/cars/Car";
const UpdateData = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <div>
          <AddPersonForm />
        </div> */}
        <div>
          <UpdateCarForm key={props} value={props} />
        </div>
        {/* <div>
          <Person />
        </div>
        <Car /> */}
      </main>
    </>
  );
};

export default UpdateData;
