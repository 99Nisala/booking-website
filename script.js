const SUPABASE_URL = "https://ciownxvbnlrcjfvjoopl.supabase.co";
const SUPABASE_KEY = "sb_publishable_G8ytRHJ6Hkq0CBz20g3aJg_P8DE2ayP";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("bookingForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;

    const { data, error } = await supabase
        .from("bookings")
        .insert([{ name, email, date }]);

    if (error) {
        alert("Error saving booking: " + error.message);
        console.error(error);
    } else {
        alert("Booking saved successfully!");
    }
});
