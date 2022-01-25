import { observer } from "mobx-react";
import PetStore from "../Stores/petStore";
const PetItem = ({ pet }) => {
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => PetStore.handleAdopt(pet.id)}
          >
            Adopt
          </button>
          <br />
          <div>
            <button
              type="button"
              class="btn btn-info"
              // onClick={() => PetStore.PetThePet(pet.id)}
            >
              Pet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(PetItem);
