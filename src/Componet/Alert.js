import React from 'react'

export default function Alert(props) {
    return (
      props.alertmsg && <div className={`alert alert-${props.alertmsg.type} alert-dismissible fade show`} role="alert">
           {props.alertmsg.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

