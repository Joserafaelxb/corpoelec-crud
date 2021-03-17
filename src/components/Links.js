import React, { useEffect, useState } from "react";
import LinksForm from "./LinksForm";

import { db } from "../firebase";
import { toast } from "react-toastify";

const Links = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getUsuarios = async () => {
    db.collection("Usuarios").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUsuarios(docs);
    });
  };


  useEffect(() => {
    getUsuarios();
  }, []);

  const addOrEditUser = async (userObject) => {
    try {
      if (currentId === "") {
        await db.collection("Usuarios").doc().set(userObject);
        toast("Nuevo Usuario Agregado", {
          type: "success",
        });
      } else {
        await db.collection("Usuarios").doc(currentId).update(userObject);
        toast("Usuario modificado correctamente!", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="col-md-12 p-2">
        <LinksForm {...{ addOrEditUser, currentId, usuarios }} />
      </div>
    </>
  );
};

export default Links;