import React, { useContext, useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { InputText } from "../components/InputText";
import { ButtonComp } from "../components/ButtonComp";
import FlashMessage, { showMessage } from "react-native-flash-message";
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { AuthContext } from "../context/AuthContext";
import { userUserAuth } from "../context/UserAuthContext";
const WindowedHeight = Dimensions.get("screen").height;
const width = Dimensions.get("screen");
export const AddCash = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = userUserAuth();
  // get the user login
  const ValidateForm = () => {
    try {
      let valid = true;
      if (amount.trim() === "") {
        setAmountError("amount required");
        valid = false;
      }
      if (amount <= 0) {
        setAmountError("amount must be greater than zero");
        valid = false;
      } else {
        setAmountError("");
      }
      return valid;
    } catch (error) {
      console.log(error);
    }
  };
  const handleForm = async () => {
    try {
      setLoading(true);

      if (ValidateForm()) {
        const cardRef = collection(db, "card");
        const querySnapshot = await getDocs(
          query(cardRef, where("userId", "==", user.uid))
        );
        let updatedAmount = 0
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const docRef = doc.ref;
            const currentAmount = doc.data().amount;
            updatedAmount = currentAmount + parseFloat(amount);

            updateDoc(docRef, { amount: updatedAmount });
            console.log("Document updated with ID: ", doc.id);
            console.log("Updated amount: ", updatedAmount);
            
          });
        } else {
          const docRef = await addDoc(cardRef, {
            amount: parseFloat(amount),
            userId: user.uid,
          });
          console.log("Document written with ID: ", docRef.id);
          console.log(amount);
          navigation.navigate("CreditCard", {
            updatedAmount: amount,
          });
        }

        setLoading(false);
        showMessage({
          message: "Saved",
          style: { paddingVertical: 25, fontSize: 20 },
          type: "success",
          titleStyle: { fontSize: 20, paddingHorizontal: 15, color: "black" },
          backgroundColor: "#FCA210",
        });
        navigation.navigate("CreditCard", {
          updatedAmount: updatedAmount,
        });
      }
    } catch (error) {
      console.log(error);
      showMessage({
        message: "An error occurred",
        style: { paddingVertical: 25, fontSize: 20 },
        type: "danger",
        titleStyle: { fontSize: 20, paddingHorizontal: 15, color: "black" },
        backgroundColor: "#FF6347",
      });
    }
  };

  return (
    <>
      <View style={[tw`bg-[#121214]`, { height: WindowedHeight }]}>
        <FlashMessage position={"top"} />
        <View
          style={[
            tw`border-b border-gray-500 bg-[#202325] pt-8 `,
            { height: 120 },
          ]}
        >
          <View style={[tw`flex flex-row gap-4 items-center p-5 pt-10`]}>
            <TouchableOpacity onPress={() => navigation.navigate("CreditCard")}>
              <Feather name="arrow-left" size={25} color="#FCA311" />
            </TouchableOpacity>
            <Text style={[tw`text-white font-bold text-2xl`]}>Add Money</Text>
          </View>
        </View>
        <View style={[tw``, {}]}>
          <InputText
            placeholder="Enter Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType={"numeric"}
          />
          <View>
            {amountError ? (
              <Text
                style={{
                  color: "red",
                  fontSize: 14,
                  paddingHorizontal: 20,
                  paddingTop: 1,
                }}
              >
                {" "}
                {amountError}
              </Text>
            ) : null}
          </View>
          <ButtonComp text1="Add Money" onPress={handleForm} />
        </View>
      </View>
    </>
  );
};
