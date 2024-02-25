const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: function() {
            return !this.repeatDays || this.repeatDays.length === 0;
        }
    },
    repeatDays: {
        type: [String],
        validate: {
            validator: function(arr) {
                return arr.length > 0;
            },
            message: 'At least one repeat day must be selected'
        }
    },
    files: [String],
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;