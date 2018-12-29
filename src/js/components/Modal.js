import React from "react";

const Modal = ({handleChange,name,fatherName,address,closeModal,show})=>(
		<div
			className="modal"
			tabindex="-1"
			role="dialog"
			style={{ display: show ? "block" : "none" }}
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="row">
								<div className="col-md-4">
									<input
										type="text"
										className="form-control"
										placeholder="First name"
										name="name"
										onChange={handleChange}
										value={name}
									/>
								</div>
								<div className="col-md-4">
									<input
										type="text"
										className="form-control"
										placeholder="Father name"
										name="fatherName"
										onChange={handleChange}
										value={fatherName}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<input
										type="text"
										className="form-control"
										placeholder="Address"
										name="address"
										onChange={handleChange}
										value={address}
									/>
								</div>
								<div
									className="col-md-4"
									style={{ marginTop: 10 }}
								>
									<button
										type="submit"
										onClick={e => {
											e.preventDefault();
											submitData({
												name,
												fatherName,
												address
											});
										}}
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={closeModal}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
export default Modal
