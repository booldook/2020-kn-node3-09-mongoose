function deleteData(_id) {
	var f = document.deleteForm;
	f._id.value = _id;
	f.submit();
}