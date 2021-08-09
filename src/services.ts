import axios from "axios";

export const baseUrl = "https://angel-portfolio-v0.herokuapp.com/api";

export async function getWorks() {
  const worksUrl = `${baseUrl}/works`;
  try {
    const res = await axios.get(worksUrl);

    return res.data.works;
  } catch (err) {
    console.log(err);
  }
}

export async function getWorkByLink(link:string) {
	const worksUrl = `${baseUrl}/works/${link}`;
	try {
	  const res = await axios.get(worksUrl);
      
	  return res.data.work;
	} catch (err) {
	  console.log(err);
	}
      }
