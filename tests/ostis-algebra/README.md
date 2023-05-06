# OSTIS-numeric-models  <a name = "header"></a> 

Ostis-numeric-models is an open-source knowledge base for Numeric models system for Open Semantic Technology for Intelligent Systems. OSTIS is aimed at creating a mass semantic technology for component design of intelligent systems for various purposes.

## Table of Contents  <a name = "table"></a> 

- [OSTIS-numeric-models](#header)
- [Table of Content](#table)
- [Installation](#install)
- [Build knowledge base](#build)
- [Run](#run)
- [Structure](#struct)
- [Contributing](#contribute)

## Installation  <a name = "install"></a> 

Linux:

```sh
git clone https://github.com/ostis-apps/ostis-algebra
cd {project-name}/scripts
./install_ostis.sh
```

## Build knowledge base  <a name = "build"></a> 

Linux:

```sh
cd {project-name}/ostis-web-platform/scripts
./build_kb.sh
```

## Run  <a name = "run"></a> 

Run on Linux:

```sh
#Terminal 1
cd {project-name}/ostis-web-platform/scripts
./run_sctp.sh

#Terminal 2
cd {project-name}/ostis-web-platform/scripts
./run_scweb.sh
```

Then open localhost:8000 in your browser.

## Structure  <a name = "struct"></a> 

- [knowledge base of numeric models](./kb/knowledge_base_of_numeric_models)
  - [algebra](./kb/knowledge_base_of_numeric_models/sections/section_algebra)
    - [elementary algebra](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_elementary_algebra)
      - [algebraic equations](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_elementary_algebra/sections/section_algebraic_equations)
      - [algebraic expressions](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_elementary_algebra/sections/section_algebraic_expressions)
      - [algebraic inequalities](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_elementary_algebra/sections/section_algebraic_inequalities)
      - [algebraic polynomials](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_elementary_algebra/sections/section_algebraic_polynomials)
      - [sets of algebraic equations](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_elementary_algebra/sections/section_sets_of_algebraic_equations)
      - [sets of algebraic inequalities](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_elementary_algebra/sections/section_sets_of_algebraic_inequalities)
    - [general algebra](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_general_algebra)
      - [commutative algebra](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_general_algebra/sections/section_commutative_algebra)
      - [homological algebra](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_general_algebra/sections/section_homological_algebra)
    - [linear algebra](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_linear_algebra)
      - [matrices](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_linear_algebra/sections/section_matrices)
      - [vectors and linear spaces](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_linear_algebra/sections/section_vectors_and_linear_spaces)
    - [quaternions and clifford algebras](./kb/knowledge_base_of_numeric_models/sections/section_algebra/sections/section_quaternions_and_clifford_algebras)
  - [calculus and analysis](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis)
    - [complex analysis](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_complex_analysis)
      - [complex functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_complex_analysis/sections/section_complex_functions)
      - [complex series](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_complex_analysis/sections/section_complex_series)
      - [complex numbers](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_complex_analysis/sections/section_complex_numbers)
    - [differential calculus](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_differential_calculus)
    - [differential equations](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_differential_equations)
      - [operational calculus](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_differential_equations/sections/section_operational_calculus)
    - [functional analysis](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_functional_analysis)
      - [calculus of variations](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_functional_analysis/sections/section_calculus_of_variations)
    - [integral calculus](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_integral_calculus)
    - [real analysis](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_real_analysis)
      - [real functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_real_analysis/sections/section_real_functions)
      - [real sequences](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_real_analysis/sections/section_real_sequences)
      - [real series](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_real_analysis/sections/section_real_series)
    - [special functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions)
      - [elementary functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_elementary_functions)
        - [exponential functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_elementary_functions/sections/section_exponential_functions)
        - [hyperbolic functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_elementary_functions/sections/section_hyperbolic_functions)
        - [linear functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_elementary_functions/sections/section_linear_functions)
        - [logarithms](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_elementary_functions/sections/section_logarithms)
        - [polynomial functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_elementary_functions/sections/section_polynomial_functions)
        - [power functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_elementary_functions/sections/section_power_functions)
        - [trigonometric functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_elementary_functions/sections/section_trigonometric_functions)
      - [factorials](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_factorials)
      - [hyperoperations](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_hyperoperations)
      - [integral functions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_integral_functions)
      - [parametric equations](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_parametric_equations)
      - [transcendental equations](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_transcendental_equations)
      - [transcendental expressions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_transcendental_expressions)
      - [transcendental inequalities](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_functions/sections/section_transcendental_inequalities)
    - [special series](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_series)
      - [progressions](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_special_series/sections/section_progressions)
    - [tensor calculus](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_tensor_calculus)
    - [vector calculus](./kb/knowledge_base_of_numeric_models/sections/section_calculus_and_analysis/sections/section_vector_calculus)
  - [computational math](./kb/knowledge_base_of_numeric_models/sections/section_computational_math)
  - [number theory](./kb/knowledge_base_of_numeric_models/sections/section_number_theory)
    - [algebraic number theory](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_algebraic_number_theory)
    - [analytic number theory](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_analytic_number_theory)
    - [arithmetic](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_arithmetic)
      - [integer numbers](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_arithmetic/sections/section_integer_numbers)
      - [natural numbers](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_arithmetic/sections/section_natural_numbers)
      - [numeral systems](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_arithmetic/sections/section_numeral_systems)
      - [rational numbers](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_arithmetic/sections/section_rational_numbers)
      - [real numbers](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_arithmetic/sections/section_real_numbers)
    - [elementary number theory](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_elementary_number_theory)
    - [math constants](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_math_constants)
    - [special numbers](./kb/knowledge_base_of_numeric_models/sections/section_number_theory/sections/section_special_numbers)
  - [probability theory](./kb/knowledge_base_of_numeric_models/sections/section_probability_theory)
  - [mathematical statistics](./kb/knowledge_base_of_numeric_models/sections/section_mathematical_statistics)
  - [terminology](./kb/knowledge_base_of_numeric_models/sections/section_terminology)
  - [topology](./kb/knowledge_base_of_numeric_models/sections/section_topology)
    - [algebraic topology](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_algebraic_topology)
      - [cohomology](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_algebraic_topology/sections/section_of_cohomology)
      - [complexes](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_algebraic_topology/sections/section_of_complexes)
      - [homology](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_algebraic_topology/sections/section_of_homology)
      - [homotopy groups](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_algebraic_topology/sections/section_of_homotopy_groups)
      - [knot theory](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_algebraic_topology/sections/section_of_knot_theory)
      - [manifolds](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_algebraic_topology/sections/section_of_manifolds)
    - [computational topology](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_computational_topology)
    - [differential topology](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_differential_topology)
    - [general topology](./kb/knowledge_base_of_numeric_models/sections/section_topology/sections/section_general_topology)

## Contributing  <a name = "contribute"></a> 

### Help to development

If you are a developer and you wish to contribute to the knowledge base please fork the project and submit a pull request on the test branch.

### Issues

You can trace the status of known issues here, also feel free to file a new issue (helpful description, screenshots are appreciated), or send an [email](mailto:valukevichv@gmail.com) if you have any questions.
