// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Counter from 'src/components/Counter';

// Action Creators
import { increment, decrement } from '../actions';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  count: state.counter.value,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
});

// Container
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

// == Export
export default CounterContainer;
