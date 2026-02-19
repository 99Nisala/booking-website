// 🔹 CHANGE THESE 2 VALUES ONLY
const SUPABASE_URL = "https://ciownxvbnlrcjfvjoopl.supabase.co";
const SUPABASE_KEY = "sb_publishable_G8ytRHJ6Hkq0CBz20g3aJg_P8DE2ayP";

// Create Supabase client
const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_KEY);

// Handle form submission
document.getElementById("bookingForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;

    const { data, error } = await client
        .from("bookings")
        .insert([
            { name: name, email: email, date: date }
        ]);

    if (error) {
        alert("Error saving booking: " + error.message);
        console.log(error);
    } else {
        alert("Booking saved successfully!");
        document.getElementById("bookingForm").reset();
    }
});
