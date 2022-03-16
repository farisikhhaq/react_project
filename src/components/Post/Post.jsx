import React from "react";

const Post = (props) => {
    return (
        <div className="content">
            <table>
                <tr>
                    <th>NIM</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>No Handphone</th>
                    <th>Jobdesk</th>
                </tr>
                <tr>
                    <td className="nim" id="nim">{props.nim}</td>
                    <td className="nama" id="nama">{props.nama}</td>
                    <td className="alamat" id="alamat">{props.alamat}</td>
                    <td className="no_hp" id="no_hp">{props.no_hp}</td>
                    <td className="jobdesk" id="jobdesk">{props.jobdesk}</td>
                </tr>
            </table>
        </div>
    )   
}
export default Post;