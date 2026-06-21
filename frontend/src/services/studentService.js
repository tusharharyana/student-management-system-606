import axios from "axios";

const API = "http://localhost:8080";

export const loginApi = async (data) => {
  return axios.post(`${API}/auth/login`, data);
};

export const getStudents = async (token) => {
  return axios.get(`${API}/students`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addStudent = async (token, student) => {
  return axios.post(`${API}/students`, student, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteStudent = async (token, id) => {
  return axios.delete(`${API}/students/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const countStudents = async (token) => {
  return axios.get(`${API}/students/count`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const searchStudents = async (token, name) => {
  return axios.get(`${API}/students/search?name=${name}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getStudentById = async (token, id) => {
  return axios.get(`${API}/students/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateStudent = async (token, id, student) => {
  return axios.put(`${API}/students/${id}`, student, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
