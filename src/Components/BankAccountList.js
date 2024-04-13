import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteBankAccount, getAllAccounts, updateBankAccount } from "../Services/BankAccountService";

const BankAccountList = () => {
    const [accounts, setAccounts] = useState([
        { accountNum: "12345678", accountHolderName: "Anthony", bankName: "HDFC" }
    ]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllAccounts()
            .then(res => setAccounts(res))
            .catch(error => console.log(error));
    }, []);

    const deleteAccount = (accountNum) => {
        deleteBankAccount(accountNum)
            .then(() => {
                alert("Account deleted");
                getAllAccounts()
                    .then(res => setAccounts(res))
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    };

    const updateAccount = (index) => {
        navigate(`/update/${index}`);
    };

    const accountInfo = (index) => {
        navigate(`/info/${index}`);
    };

    const addBankAccount = () => {
        navigate("/add");
    };

    return (
        <div className="container">
            <button onClick={addBankAccount} className="btn btn-success">Add Bank Account</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Account Holder Name</th>
                        <th>Bank Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, index) => (
                        <tr key={index}>
                            <td>{account.accountNum}</td>
                            <td>{account.accountHolderName}</td>
                            <td>{account.bankName}</td>
                            <td>
                                <Link to={`/update/${index}`} className="btn btn-primary" onClick={() => updateAccount(index)}>Update</Link>
                                <button className="btn btn-danger" onClick={() => deleteAccount(account.accountNum)}>Delete</button>
                                <Link to={`/info/${index}`} className="btn btn-info" onClick={() => accountInfo(index)}>Info</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BankAccountList;
