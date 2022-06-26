import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post_actions";

const DeleteCard = (props) => {
  const dispatch = useDispatch();
  const deleteQuote = () => dispatch(deletePost(props.id));

  return (
    <div
      onClick={() => {
        if (window.confirm("Supprimer votre Post ?")) {
          deleteQuote();
        }
      }}
    >
      <img src="./img/icons/delete.svg" alt="Supprimer" />
    </div>
  );
};

export default DeleteCard;
