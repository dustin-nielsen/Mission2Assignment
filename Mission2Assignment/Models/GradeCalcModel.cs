using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Models
{
    public class GradeCalcModel
    {
        [Range(0.00, 100.00, ErrorMessage = "Assignments must be between 0 and 100")]
        public decimal Assignments { get; set; }
        [Range(0.00, 100.00, ErrorMessage = "Group Projects must be between 0 and 100")]
        public decimal GroupProjects { get; set; }
        [Range(0.00, 100.00, ErrorMessage = "Quizzes must be between 0 and 100")]
        public decimal Quizzes { get; set; }
        [Range(0.00, 100.00, ErrorMessage = "Exams must be between 0 and 100")]
        public decimal Exams { get; set; }
        [Range(0.0, 100.00, ErrorMessage = "INTEX must be between 0 and 100")]
        public decimal INTEX { get; set; }
    }
}
