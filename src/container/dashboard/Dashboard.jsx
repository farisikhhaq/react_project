import React, { Component, Fragment } from "react";
import './Dashboard.css';
import Post from "../../components/Post/Post";
import axios from "axios";


class Dashboard extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        // fetch('')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
        axios.get('http://localhost:3004/posts') //axios.get(url)
        .then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Data Kelompok</h2>
                {
                    this.state.post.map(post => {
                        return <Post
                            key={post.id}
                            nim={post.nim}
                            nama={post.nama}
                            alamat={post.alamat}
                            no_hp={post.no_hp}
                            jobdesk={post.jobdesk} />
                    })
                }

            </Fragment>
        )
    }
}

export default Dashboard;