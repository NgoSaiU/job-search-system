import { ref } from "vue";

const getCompanies = () => {
    const conpanies = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            let data = await fetch("http://localhost:5001/compaies");
            if (!data.ok) {
                throw Error("no data avalibale");
            }
            conpanies.value = await data.json();
            console.log(conpanies);

        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { conpanies, error, load }
}

export default getCompanies