export const treatmentsService = {
  getTreatments() {
    // pobiera liste wszystkich pokoi
    return fetch('http://localhost:3000/treatments').then(response => response.json());
  },
  getTreatment(id) {
    // pobiera jeden pokoj o zadanym id
    return fetch(`http://localhost:3000/treatments/${id}`).then(response => response.json());
  }
};
