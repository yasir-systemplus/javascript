// * Creating sets

const emails = new Set();

emails
  .add("admin@yasir.com.pk")
  .add("admin.pk")
  .add("admin.pk")
  .add("junaid@juni.com");

// Removes Duplicate
console.log(emails);

// Checks if item exist
console.log(emails.has("admin.pk"));

// Size
console.log(emails.size);

// * Weak sets are same except they contain the objects
