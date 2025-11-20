export default function Expression() {
    const age = 18;
    const sum = 5 + 7;
    const greeting = "Hello World";
    const isAdult = 25 > 18;
    const mixed = isAdult && "Allowed";
    const fallback = "" || "Default value";
    const isChild = !isAdult;
    const isUnder18 = age < 18;

    function describeAge(value) {
        return value >= 18 ? "Du bist Erwachsen" : "Du bist nicht Erwachsen";
    }

    console.log("describeAge(12):", describeAge(18));
    console.log("age:", age);
    console.log("sum:", sum);
    console.log("greeting:", greeting);
    console.log("isAdult:", isAdult);
    console.log("mixed:", mixed);
    console.log("fallback:", fallback);
    console.log("isChild:", isChild);
    console.log("isUnder18:", isUnder18);

    return (
        <div>Check die Konsole</div>
    );
}