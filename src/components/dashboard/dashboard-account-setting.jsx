import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaUser,
	FaLock,
	FaBell,
	FaKey,
	FaCreditCard,
	FaTrash,
	FaInfoCircle,
} from "react-icons/fa";

const AccountSettings = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
	const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [userData, setUserData] = useState({
		name: "John Doe",
		email: "johndoe@example.com",
		phone: "123-456-7890",
		profilePicture: "",
		notifications: { email: true, sms: false, push: true },
		privacy: { profileVisible: true, dataSharing: false },
	});

	const togglePasswordModal = () =>
		setIsPasswordModalOpen(!isPasswordModalOpen);
	const toggleProfileModal = () => setIsProfileModalOpen(!isProfileModalOpen);
	const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3, // Controls delay between child animations
			},
		},
	};

	const childVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={containerVariants}
			className="p-6 max-w-4xl mx-auto">
			<h1 className="text-3xl font-semibold text-center mb-6">
				Account Settings
			</h1>

			{/* Profile Section */}
			<motion.div
				variants={childVariants}
				className="mb-6 p-6 bg-white rounded-xl shadow-lg"
				whileHover={{ scale: 1.02 }}>
				<div className="flex items-center gap-6">
					<div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
						{userData.profilePicture ? (
							<img
								src={userData.profilePicture}
								alt="Profile"
								className="w-full h-full rounded-full object-cover"
							/>
						) : (
							<FaUser className="text-4xl text-gray-500" />
						)}
					</div>
					<div className="flex-1">
						<h2 className="text-xl font-semibold">{userData.name}</h2>
						<p className="text-gray-600">{userData.email}</p>
						<p className="text-gray-600">{userData.phone}</p>
					</div>
					<button
						onClick={toggleProfileModal}
						className="px-2 py-2 bg-blue-600 text-white text-xs md:text-md lg:text-base rounded-md hover:bg-blue-700">
						Edit Profile
					</button>
				</div>
			</motion.div>

			{/* Notifications Preferences */}
			<motion.div
				variants={childVariants}
				className="mb-6 p-6 bg-white rounded-xl shadow-lg"
				whileHover={{ scale: 1.02 }}>
				<h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
				<AnimatePresence>
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<span>Email Notifications</span>
							<input
								type="checkbox"
								checked={userData.notifications.email}
								onChange={(e) =>
									setUserData({
										...userData,
										notifications: {
											...userData.notifications,
											email: e.target.checked,
										},
									})
								}
								className="checkbox-toggle"
							/>
						</div>
						<div className="flex justify-between items-center">
							<span>SMS Notifications</span>
							<input
								type="checkbox"
								checked={userData.notifications.sms}
								onChange={(e) =>
									setUserData({
										...userData,
										notifications: {
											...userData.notifications,
											sms: e.target.checked,
										},
									})
								}
								className="checkbox-toggle"
							/>
						</div>
						<div className="flex justify-between items-center">
							<span>Push Notifications</span>
							<input
								type="checkbox"
								checked={userData.notifications.push}
								onChange={(e) =>
									setUserData({
										...userData,
										notifications: {
											...userData.notifications,
											push: e.target.checked,
										},
									})
								}
								className="checkbox-toggle"
							/>
						</div>
					</div>
				</AnimatePresence>
			</motion.div>

			{/* Change Password */}
			<motion.div
				variants={childVariants}
				className="mb-6 p-6 bg-white rounded-xl shadow-lg"
				whileHover={{ scale: 1.02 }}>
				<h2 className="text-xl font-semibold mb-4">Change Password</h2>
				<AnimatePresence>
					<button
						onClick={togglePasswordModal}
						className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
						Change Password
					</button>
				</AnimatePresence>
			</motion.div>

			{/* Account Deletion */}
			<motion.div
				variants={childVariants}
				className="p-6 bg-white rounded-xl shadow-lg"
				whileHover={{ scale: 1.02 }}>
				<h2 className="text-xl font-semibold mb-4">Account Deletion</h2>
				<p className="text-red-600">
					Warning: Deleting your account is permanent and irreversible.
				</p>
				<AnimatePresence>
					<button
						onClick={toggleDeleteModal}
						className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
						Delete Account
					</button>
				</AnimatePresence>
			</motion.div>

			{/* Modals */}
			<AnimatePresence>
				{/* Edit Profile Modal */}
				{isProfileModalOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50"
						onClick={toggleProfileModal}>
						<motion.div
							initial={{ y: -50 }}
							animate={{ y: 0 }}
							className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
							onClick={(e) => e.stopPropagation()}>
							<h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
							<div className="space-y-4">
								<input
									type="text"
									placeholder="Full Name"
									value={userData.name}
									onChange={(e) =>
										setUserData({ ...userData, name: e.target.value })
									}
									className="w-full p-3 border rounded-lg"
								/>
								<input
									type="email"
									placeholder="Email Address"
									value={userData.email}
									onChange={(e) =>
										setUserData({ ...userData, email: e.target.value })
									}
									className="w-full p-3 border rounded-lg"
								/>
								<input
									type="tel"
									placeholder="Phone Number"
									value={userData.phone}
									onChange={(e) =>
										setUserData({ ...userData, phone: e.target.value })
									}
									className="w-full p-3 border rounded-lg"
								/>
								<input
									type="file"
									onChange={(e) =>
										setUserData({
											...userData,
											profilePicture: URL.createObjectURL(e.target.files[0]),
										})
									}
									className="w-full p-3 border rounded-lg"
								/>
							</div>
							<button
								className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg w-full"
								onClick={toggleProfileModal}>
								Save Changes
							</button>
						</motion.div>
					</motion.div>
				)}

				{/* Change Password Modal */}
				{isPasswordModalOpen && (
					<motion.div
						variants={childVariants}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50"
						onClick={togglePasswordModal}>
						<motion.div
							initial={{ y: -50 }}
							animate={{ y: 0 }}
							className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
							onClick={(e) => e.stopPropagation()}>
							<h2 className="text-2xl font-bold mb-4">Change Password</h2>
							<div className="space-y-4">
								<input
									type="password"
									placeholder="Current Password"
									className="w-full p-3 border rounded-lg"
								/>
								<input
									type="password"
									placeholder="New Password"
									className="w-full p-3 border rounded-lg"
								/>
								<input
									type="password"
									placeholder="Confirm New Password"
									className="w-full p-3 border rounded-lg"
								/>
							</div>
							<button
								className="mt-4 px-6 py-3 bg-yellow-600 text-white rounded-lg w-full"
								onClick={togglePasswordModal}>
								Update Password
							</button>
						</motion.div>
					</motion.div>
				)}

				{/* Delete Account Modal */}
				{isDeleteModalOpen && (
					<motion.div
						variants={childVariants}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50"
						onClick={toggleDeleteModal}>
						<motion.div
							variants={childVariants}
							initial={{ y: -50 }}
							animate={{ y: 0 }}
							className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
							onClick={(e) => e.stopPropagation()}>
							<h2 className="text-2xl font-bold mb-4 text-red-600">
								Confirm Deletion
							</h2>
							<p className="mb-4">
								Are you sure you want to delete your account? This action cannot
								be undone.
							</p>
							<button
								className="px-6 py-3 bg-red-600 text-white rounded-lg w-full mb-2"
								onClick={() => {
									alert("Account Deleted!");
									toggleDeleteModal();
								}}>
								Delete Account
							</button>
							<button
								className="px-6 py-3 bg-gray-300 text-black rounded-lg w-full"
								onClick={toggleDeleteModal}>
								Cancel
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default AccountSettings;
