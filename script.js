const FormValidator = {
    patterns: {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[\+]?[1-9][\d]{0,15}$/,
        name: /^[a-zA-Z\s]{2,30}$/
    },

    validators: {
        firstName: function(value) {
            if (!value.trim()) {
                return { valid: false, message: "First name is required" };
            }
            if (!FormValidator.patterns.name.test(value)) {
                return { valid: false, message: "First name should contain only letters (2-30 characters)" };
            }
            return { valid: true, message: "" };
        },

        lastName: function(value) {
            if (!value.trim()) {
                return { valid: false, message: "Last name is required" };
            }
            if (!FormValidator.patterns.name.test(value)) {
                return { valid: false, message: "Last name should contain only letters (2-30 characters)" };
            }
            return { valid: true, message: "" };
        },

        email: function(value) {
            if (!value.trim()) {
                return { valid: false, message: "Email address is required" };
            }
            if (!FormValidator.patterns.email.test(value)) {
                return { valid: false, message: "Please enter a valid email address" };
            }
            return { valid: true, message: "" };
        },

        phone: function(value) {
            if (!value.trim()) {
                return { valid: false, message: "Phone number is required" };
            }
            const cleanPhone = value.replace(/\s/g, '');
            if (!FormValidator.patterns.phone.test(cleanPhone)) {
                return { valid: false, message: "Please enter a valid phone number" };
            }
            return { valid: true, message: "" };
        },

        password: function(value) {
            if (!value) {
                return { valid: false, message: "Password is required" };
            }
            if (value.length < 8) {
                return { valid: false, message: "Password must be at least 8 characters long" };
            }
            if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
                return { valid: false, message: "Password must contain at least one uppercase letter, one lowercase letter, and one number" };
            }
            return { valid: true, message: "" };
        },

        confirmPassword: function(value) {
            const password = document.getElementById('password').value;
            if (!value) {
                return { valid: false, message: "Please confirm your password" };
            }
            if (value !== password) {
                return { valid: false, message: "Passwords do not match" };
            }
            return { valid: true, message: "" };
        },

        birthDate: function(value) {
            if (!value) {
                return { valid: false, message: "Date of birth is required" };
            }
            
            const birthDate = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            const actualAge = (monthDiff < 0 || (monthDiff === 0 && today.get
